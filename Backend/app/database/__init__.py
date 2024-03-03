from .models import Base, User, WeeklyPlan, Habit, Todo, SleepTracker, WorkoutTracker, JournalYourDay, MoodTracker, MoodColorOptions



def calculate_duration(self, end_time: datetime) -> None:
    """
    Calculates the duration of the workout based on start_time and end_time.

    Args:
        end_time (datetime): The end time of the workout session.
    """
    if self.start_time:
        self.duration = end_time - self.start_time