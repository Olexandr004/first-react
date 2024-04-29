
import './App.css'

function App() {
    return (
        <div>
            <Header />
            <div>
                <Sidebar />
                <MainContainer />
            </div>
        </div>
    );
}

function Header() {
    return (
        <header>
            <h1>Fake ROZETKA</h1>
        </header>
    );
}

function Sidebar() {
    return (
        <aside>
            <nav>
                <ul>
                    <li><a href="/">Телефони</a></li>
                    <li><a href="/">Ноутбуки</a></li>
                    <li><a href="/">Планшети</a></li>
                    <li><a href="/">Компьютери</a></li>
                    <li><a href="/">Телевізори</a></li>
                </ul>
            </nav>
        </aside>
    )
}

function MainContainer() {
    return (
        <main>
            <div>
                <p>Натисни на одну з категорій, щоб подивитися товар!</p>
            </div>
        </main>
    )
}

export default App;
