import { type NextPage } from "next";
// import { api } from "~/utils/api";

const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  const dataSource = [
    {
      idx: 0,
      title: "哈尔滨工业大学：ChatGPT调研报告",
      url: "https://storage.rentsoft.cn/openim/1680008233275000000-1721640720800649346.pdf",
      size: "1.8MB",
    },
  ];

  const download = (item: (typeof dataSource)[0]) => {
    let link = document.createElement("a");
    link.download = item.title;
    link.style.display = "none";
    link.href = item.url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="linear_bg h-screen w-full overflow-y-auto">
      <div className="mb-2 bg-white px-3 py-3 font-medium text-[#333]">
        佳文推荐
      </div>
      <div className="mx-2 rounded bg-white px-3 py-2 text-sm">
        <div className="mb-1 text-[#999]">今天</div>
        {dataSource.map((item) => (
          <div
            key={item.idx}
            className="border-b border-[#DFDFDF] py-2 text-[#333] last:border-none last:pb-0"
            onClick={() => download(item)}
          >
            <div>{item.title}</div>
            <div className="text-right text-xs text-[#999]">
              <span className="mr-2">{item.size}</span>
              <span>点击下载</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
