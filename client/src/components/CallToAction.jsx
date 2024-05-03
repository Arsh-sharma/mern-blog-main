import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">
          What would you like to learn more about? Whether it's a specific
          topic, a skill you want to develop, or something entirely new?
        </h2>
        <p className="text-gray-500 my-2">Checkout these resources!!</p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none"
        >
          <Link to="/" target="_blank" rel="noopener noreferrer">
            Home Page
          </Link>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img
          alt="home"
          src="https://lordicon.com/icons/wired/lineal/2507-learn-more-text.svg"
        />
      </div>
    </div>
  );
}
