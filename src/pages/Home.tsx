import React, { useEffect, useState } from "react";
import { Reminder } from "../models/Reminders";
import ReminderList from "./ReminderList";
import reminderService from "../services/reminder";
import NewReminder from "../components/NewReminder";

function Home() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    loadReminders();
  }, []);

  const removeReminder = async (id: number) => {
    if (id == null) return;
    await reminderService.removeReminder(id);
    const newReminders = reminders.filter((reminder) => reminder.id !== id);
    setReminders(newReminders);
  };

  const addReminder = async (title: string) => {
    if (title == null) return;
    const reminder = await reminderService.addReminder(title);
    console.log(reminder);
    setReminders([reminder, ...reminders]);
  };

  const loadReminders = async () => {
    const reminders = await reminderService.getReminders();
    setReminders(reminders);
  };
  return (
    <div>
      <NewReminder onAddReminder={addReminder} />
      <ReminderList items={reminders} onRemoveReminder={removeReminder} />
    </div>
  );
}

export default Home;
