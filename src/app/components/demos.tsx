import { DiCode } from "react-icons/di";
import { RiLightbulbLine } from "react-icons/ri";
import Image from "next/image";

export const Demo = () => {
  return (
    <div className="content_wrapper">
      <div className="demo_wrapper">
        <div className="demo_title">
          <DiCode className="" />
          <h1 className="p-1">Ask any question</h1>
        </div>
        <div className="demo_text">
          <p>Camel uses your live data.</p>
          <p>Get tables and charts instantly.</p>
        </div>
        <Image
          className="demo_image"
          src="/images/chat-demo.png"
          alt="Chatting feature demo"
          width={100}
          height={30}
          layout="responsive"
        />
      </div>
      <div className="demo_wrapper">
        <div className="demo_title">
          <RiLightbulbLine />
          <h1 className="p-1">Powerful Dashboards</h1>
        </div>
        <div className="demo_text">
          <p>Save any graph to a live dashboard.</p>
          <p>Start a chat to answer ad hoc questions.</p>
        </div>
        <Image
          className="demo_image"
          src="/images/dashboard-demo.png"
          alt="dashboard demo"
          width={100}
          height={30}
          layout="responsive"
        />
      </div>
    </div>
  );
};
