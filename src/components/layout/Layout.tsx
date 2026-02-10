type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <header>
        <h2>Photo Frame Store</h2>
      </header>

      <main>{children}</main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Photo Frame Store</p>
      </footer>
    </div>
  );
}

export default Layout;
