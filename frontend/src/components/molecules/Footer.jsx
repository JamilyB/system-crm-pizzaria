export default function Footer() {
  return (
    <footer className="w-full py-4" style={{ backgroundColor: '#260101', color: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} CRM Pizza Express App. Todos os direitos reservados.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline">Política de Privacidade</a>
          <a href="#" className="hover:underline">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
}
