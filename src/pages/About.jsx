import ReturnBnt from "../components/ReturnBnt";

export default function About() {
  return (
    <section>
      <ReturnBnt />
      <h1 className="text-3xl mb-20 mt-10 z-60">About</h1>

      <div className="flex flex-col mb-10 text-xl md:text-2xl gap-5 font-bold ml-4 mr-4">
        <p>
          My name is Lucas CHARLET.
          <br />
        </p>
        <p>I am a web developer specializing in front-end development.</p>
        <p>I have a passion for creating beautiful and functional websites.</p>
        <p>
          I am always learning new technologies and techniques to stay up to
          date with the latest industry trends.
        </p>
        <p>I started my journey in web development a few months ago.</p>
        <p>
          If you want to contact me, you can send me an email at:
          lucascharletttttt@gmail.com
        </p>
      </div>
    </section>
  );
}
