export default function Footer() {
    return (
        <footer className="flex text-slate-300 items-center">
            <span className="mx-auto">© 2023 - {(new Date().getFullYear())},  CashViewer</span>
        </footer>
    )
}