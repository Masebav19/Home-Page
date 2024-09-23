export function Menu (){
    function handleDevice (){
        window.location.replace('http://172.31.36.30:5000/devices')
    }
    function handleCalendar (){
        window.location.replace('http://172.31.36.30:5000/calendar')
    }
    function handleRepository() {
        window.location.replace('https://github.com/Masebav19/Programas-Base')
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
                <section onClick={handleRepository}>
                    <img src="../public/repository.svg" alt="Repo" />
                    <span>Repositorio</span>
                </section>
            </aside>
        </>
    )
}