from enum import Enum


class TaskStatus(Enum):
    PROCESSING = "processing"
    QUEUED = "queued"
    RUNNING = "running"
    COMPLETED = "completed"
    FAILED = "failed"
    ABORTING = "aborting"
    ABORTED = "aborted"
    DRY_RUN = "dry-run"
    ON_HOLD = "on-hold"
    SUSPENDED = "suspended"

    @staticmethod
    def all():
        return [t for t in TaskStatus]

    @staticmethod
    def final_states():
        return [
            TaskStatus.COMPLETED,
            TaskStatus.FAILED,
            TaskStatus.ABORTED,
            TaskStatus.DRY_RUN,
            TaskStatus.SUSPENDED,
        ]

    def __str__(self):
        __str = {
            TaskStatus.PROCESSING.value: "Processing",
            TaskStatus.QUEUED.value: "Queued",
            TaskStatus.RUNNING.value: "Running",
            TaskStatus.COMPLETED.value: "Completed",
            TaskStatus.FAILED.value: "Failed",
            TaskStatus.ABORTED.value: "Terminated",
            TaskStatus.DRY_RUN.value: "Dry run",
            TaskStatus.ON_HOLD.value: "On hold",
            TaskStatus.ABORTING.value: "Aborting",
            TaskStatus.SUSPENDED.value: "Suspended",
        }
        return __str[self.value]

    def symbol(self):
        __str = {
            TaskStatus.PROCESSING.value: "...",
            TaskStatus.QUEUED.value: " ",
            TaskStatus.RUNNING.value: "~",
            TaskStatus.COMPLETED.value: "✓",
            TaskStatus.FAILED.value: "!",
            TaskStatus.ABORTED.value: "T",
            TaskStatus.DRY_RUN.value: "DR",
            TaskStatus.ON_HOLD.value: "?",
            TaskStatus.ABORTING.value: "~x",
            TaskStatus.SUSPENDED.value: "II",
        }
        return __str[self.value]
