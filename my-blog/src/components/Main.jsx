import Article from "./Article";
import montagne from "../assets/img/paysage_fxf4bd.jpg";

const Main = () => {
  return (
    <main>
      <section className="flexContainer">
        <Article
          title="TITLE HEADING"
          subtitle="Title description"
          img={montagne}
          alt="montagne"
          content="Mauris consectetur tincidunt magna. Donec nec ipsum sem. Donec lacus nunc, pretium et erat vel, accumsan ullamcorper ipsum. Mauris non lobortis justo. Vivamus scelerisque, augue id aliquam aliquet, augue erat venenatis nulla, at ultrices nulla lectus id libero. Suspendisse sed elementum erat, quis porttitor tortor. In a congue neque."
        />
        <Article
          title="TITLE HEADING 2"
          subtitle="Title description 2"
          img={montagne}
          alt="montagne"
          content="Mauris consectetur tincidunt magna. Donec nec ipsum sem. Donec lacus nunc, pretium et erat vel, accumsan ullamcorper ipsum. Mauris non lobortis justo. Vivamus scelerisque, augue id aliquam aliquet, augue erat venenatis nulla, at ultrices nulla lectus id libero. Suspendisse sed elementum erat, quis porttitor tortor. In a congue neque."
        />
      </section>
    </main>
  );
};
export default Main;
