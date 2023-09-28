const calendar = document.getElementById('calendar');

function generateCalendar(year, month) {
    const startDate = new Date(year, month, 1);
    const endDate = new Date(year, month + 1, 0);
    const daysInMonth = endDate.getDate();

    let calendarHTML = '<table>';
    calendarHTML += '<tr><th>日</th><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th>土</th></tr>';

    let currentDate = startDate;
    while (currentDate <= endDate) {
        if (currentDate.getDay() === 0) {
            calendarHTML += '<tr>';
        }
        calendarHTML += `<td>${currentDate.getDate()}</td>`;
        if (currentDate.getDay() === 6) {
            calendarHTML += '</tr>';
        }
        currentDate.setDate(currentDate.getDate() + 1);
    }

    calendarHTML += '</table>';
    calendar.innerHTML = calendarHTML;
}

const currentDate = new Date();
generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
