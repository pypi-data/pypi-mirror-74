from infosystem.database import db
from infosystem.common.subsystem import entity


class Policy(entity.Entity, db.Model):

    attributes = ['capability_id', 'role_id']
    attributes += entity.Entity.attributes

    capability_id = db.Column(
        db.CHAR(32), db.ForeignKey("capability.id"), nullable=False)
    role_id = db.Column(db.CHAR(32), db.ForeignKey("role.id"), nullable=False)

    def __init__(self, id, capability_id, role_id,
                 active=True, created_at=None, created_by=None,
                 updated_at=None, updated_by=None, tag=None):
        super().__init__(id, active, created_at, created_by,
                         updated_at, updated_by, tag)
        self.capability_id = capability_id
        self.role_id = role_id

    @classmethod
    def collection(cls):
        return 'policies'
