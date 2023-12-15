import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function Layout(props) {
  return (
    <>
      <Header />
      <Content>{props.children}</Content>
      <Footer />
    </>
  );
}

export default Layout;
