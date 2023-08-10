import { About, Landing } from "./scenes";

export default function Home() {
  return (
    <main>
      <Landing />
      <About />
      <section>
        <div style={{ background: "red" }}>
          <h2>Content</h2>
        </div>
      </section>
    </main>
  );
}
