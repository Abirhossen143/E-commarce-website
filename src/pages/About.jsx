import React from "react";
import Title from "./../Component/Title";
import { assets } from "./../assets/assets";
import Newsletter from "./../Component/Newsletter";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          alt=""
          className="w-full md:max-w-[450px]"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Laboriosam, tempore perferendis repellendus qui atque iure suscipit
            facilis alias quaerat quas iusto repellat quam itaque esse illum rem
            possimus dicta ex.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
            facere dolor sapiente alias deleniti beatae dolores quis eveniet
            nostrum quam doloremque est, magni doloribus, illo aliquam
            dignissimos soluta? Fugiat, distinctio!
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            omnis commodi reiciendis tenetur aliquid? Nesciunt, ratione dolorum.
            Beatae, eius unde repellendus adipisci iste quidem consequuntur ad
            possimus sapiente, eos vero!
          </p>
        </div>
      </div>
      <div className="text-4xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assyrance:</b>
          <p className="text-gray-800">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            rem ab! Rerum magni earum aspernatur perspiciatis, aperiam iste
            delectus laudantium nostrum. Tenetur tempora veritatis vitae labore
            iure voluptatem sed ad.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-800">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            rem ab! Rerum magni earum aspernatur perspiciatis, aperiam iste
            delectus laudantium nostrum. Tenetur tempora veritatis vitae labore
            iure voluptatem sed ad.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Expectional Customer Service:</b>
          <p className="text-gray-800">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            rem ab! Rerum magni earum aspernatur perspiciatis, aperiam iste
            delectus laudantium nostrum. Tenetur tempora veritatis vitae labore
            iure voluptatem sed ad.
          </p>
        </div>
      </div>
      <Newsletter />
    </div>
  );
};

export default About;
