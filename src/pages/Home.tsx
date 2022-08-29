import React from "react";
import { Reminder } from "../models/Reminders";
import ReminderList from "./ReminderList";

const reminders: Reminder[] = [
  {
    id: 1,
    title: "Reminder 1",
  },
];

function Home() {
  return (
    <div>
      <ReminderList items={reminders} />
    </div>
  );
}

export default Home;
