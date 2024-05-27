import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-6xl font-bold text-primary">GPT Clone</h1>
          <p className="py-6 text-lg leading-loose">
            AI Language Assistant. Powered by OpenAI, it aids your conversations, content creation and more with the latest LLM
            technologies.
          </p>
          <Link href="/chat" className="btn btn-secondary">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
