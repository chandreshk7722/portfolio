"""Backend API tests for the Portfolio site (Chandresh Patidar)."""
import os
import uuid
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL")
if not BASE_URL:
    # Fallback to frontend/.env
    from pathlib import Path
    env_path = Path("/app/frontend/.env")
    if env_path.exists():
        for line in env_path.read_text().splitlines():
            if line.startswith("REACT_APP_BACKEND_URL="):
                BASE_URL = line.split("=", 1)[1].strip()
                break
BASE_URL = (BASE_URL or "").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def session():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---------- Root ----------
class TestRoot:
    def test_root_returns_portfolio_message(self, session):
        r = session.get(f"{API}/")
        assert r.status_code == 200
        data = r.json()
        assert "message" in data
        assert "Portfolio" in data["message"]


# ---------- Contact endpoints ----------
class TestContact:
    def test_create_contact_persists_and_no_objectid(self, session):
        unique = uuid.uuid4().hex[:8]
        payload = {
            "name": f"TEST_User_{unique}",
            "email": f"test_{unique}@example.com",
            "subject": f"TEST subject {unique}",
            "message": f"This is a test message {unique}",
        }
        r = session.post(f"{API}/contact", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        # No mongodb _id leaked
        assert "_id" not in data
        # Has generated id
        assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
        # Fields persisted
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data["subject"] == payload["subject"]
        assert data["message"] == payload["message"]
        assert "created_at" in data

        # GET list and verify the created entry exists, no _id
        r2 = session.get(f"{API}/contact")
        assert r2.status_code == 200
        items = r2.json()
        assert isinstance(items, list)
        assert all("_id" not in it for it in items)
        ids = [it["id"] for it in items]
        assert data["id"] in ids
        # Verify desc order by created_at: first item created_at >= last
        if len(items) >= 2:
            assert items[0]["created_at"] >= items[-1]["created_at"]

    def test_create_contact_invalid_email_returns_422(self, session):
        payload = {
            "name": "TEST_invalid_email",
            "email": "not-an-email",
            "message": "hi",
        }
        r = session.post(f"{API}/contact", json=payload)
        assert r.status_code == 422

    def test_create_contact_empty_name_returns_422(self, session):
        payload = {
            "name": "",
            "email": "good@example.com",
            "message": "hello",
        }
        r = session.post(f"{API}/contact", json=payload)
        assert r.status_code == 422

    def test_create_contact_empty_message_returns_422(self, session):
        payload = {
            "name": "TEST_no_msg",
            "email": "good@example.com",
            "message": "",
        }
        r = session.post(f"{API}/contact", json=payload)
        assert r.status_code == 422

    def test_create_contact_subject_optional(self, session):
        unique = uuid.uuid4().hex[:8]
        payload = {
            "name": f"TEST_NoSubject_{unique}",
            "email": f"nosubj_{unique}@example.com",
            "message": "Subject is optional",
        }
        r = session.post(f"{API}/contact", json=payload)
        assert r.status_code == 200
        data = r.json()
        assert data["subject"] is None
        assert data["name"] == payload["name"]


# ---------- Status endpoints (regression) ----------
class TestStatus:
    def test_create_status_check(self, session):
        unique = uuid.uuid4().hex[:8]
        r = session.post(f"{API}/status", json={"client_name": f"TEST_status_{unique}"})
        assert r.status_code == 200
        data = r.json()
        assert "_id" not in data
        assert data["client_name"] == f"TEST_status_{unique}"
        assert "id" in data and "timestamp" in data

    def test_list_status_checks(self, session):
        r = session.get(f"{API}/status")
        assert r.status_code == 200
        data = r.json()
        assert isinstance(data, list)
        assert all("_id" not in it for it in data)


# ---------- Static asset: CV ----------
class TestStaticCV:
    def test_cv_pdf_accessible(self, session):
        # CV file is served by the frontend at root
        r = session.get(f"{BASE_URL}/chandresh-patidar-cv.pdf", allow_redirects=True)
        assert r.status_code == 200
        # Should be served as PDF (content-type may vary)
        assert r.headers.get("content-type", "").lower().startswith(("application/pdf", "application/octet-stream", "binary/"))
        assert len(r.content) > 0
