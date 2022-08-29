import React, { useEffect, useState } from "react";
import { Reminder } from "../models/Reminders";
import ReminderList from "./ReminderList";
import reminderService from "../services/reminder";

function Home() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    loadReminders();
  }, []);

  const loadReminders = async () => {
    const reminders = await reminderService.getReminders();
    setReminders(reminders);
  };
  return (
    <div>
      <ReminderList items={reminders} />
    </div>
  );
}

export default Home;
