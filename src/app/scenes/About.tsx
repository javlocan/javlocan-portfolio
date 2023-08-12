import Image from "next/image";

export const About = () => {
  return (
    <section id="about">
      <div className="about--grid">
        <h2>Hi! This is me, javi</h2>
        <Image
          src="/perfil.jpeg"
          alt="My profile photo"
          className="photo"
          width="1000"
          height="1000"
        />
        <p>
          A los 13 años destripaba plantillas de Tumblr. CSS2, HTML4...
          ¿Remember Microsoft Frontpage? Lo dejé cuando 10.000 personas habían
          elegido la más básica, fea y poco trabajada de todas las que hice.
          Diseñaba firmas para foros en la vanguardia del Photoshop (CS6) y
          jugaba con wordpress y blogspot cuando se hacían la competencia.
          Javascript era, a menudo, esa cosa que hacía romperse las páginas y
          las llenaba de historias molestas que cargaban extremadamente lento.
          En ingeniería aprendí algoritmia con C. Descubrí cuánto disfrutaba
          resolviendo problemas lógicos y la creatividad que podía poner en
          ello. <br />
          <br />
          Ha llovido desde entonces. Ahora me dedico a construir soluciones
          lógicas y visuales para la web, poniendo la intuitividad y
          accesibilidad en el centro. Una tecnología con interactividad sencilla
          y natural, algo que todas podamos usar.
        </p>
      </div>
    </section>
  );
};
