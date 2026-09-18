function updateCalendar() {
    const now = new Date();
    const day = now.getDate();
    
    const monthNames = [
        "JANV", "FÉVR", "MARS", "AVR", "MAI", "JUIN",
        "JUIL", "AOÛT", "SEPT", "OCT", "NOV", "DÉC"
    ];
    
    
    const month = monthNames[now.getMonth()];
    const dayEl = document.getElementById('day');
    const monthEl = document.getElementById('month');

   
    if (dayEl) dayEl.textContent = day;
    if (monthEl) monthEl.textContent = month;
}


window.addEventListener('DOMContentLoaded', () => {
    updateCalendar();
    
   
});