export function Menu (){
    function handleDevice (){
        window.location.replace('http://172.31.36.30:5000/devices')
    }
    function handleCalendar (){
        window.location.replace('http://172.31.36.30:5000/calendar')
    }
    return(
        <>
            <aside className="Menu-container">
                <section>
                    <img src="../public/menu.svg" alt="Menu" />
                </section>
                <section onClick={handleDevice}>
                    <img src="../public/device.svg" alt="device" />
                    <span>Dispositivos</span>
                </section>
                <section onClick={handleCalendar}>
                    <img src="../public/calendar.svg" alt="calendar" />
                    <span>Calendario</span>
                </section>
            </aside>
        </>
    )
}