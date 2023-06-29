import React from "react";

export default function FormattedDate(props) {
  const days = [`Sun`, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`];
  const months = [
    `Jan`,
    `Feb`,
    `Mar`,
    `Apr`,
    `May`,
    `Jun`,
    `Jul`,
    `Aug`,
    `Sep`,
    `Oct`,
    `Nov`,
    `Dec`,
  ];
  const day = days[props.date.getDay()];
  const number = props.date.getDate();
  const month = months[props.date.getMonth()];
  const year = props.date.getFullYear();
  const hours = String(props.date.getHours()).padStart(2, 0);
  const minutes = String(props.date.getMinutes()).padStart(2, 0);

  return (
    <div>
      {day}, {number} {month} {year}, {hours}:{minutes}
    </div>
  );
}
