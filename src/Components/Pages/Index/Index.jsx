import styles from "./Index.module.css";

const Index = () => {
  let HtmlIndex = (
    <div className={`${styles.container} border-2 border-red-500`}>
      <h1 className="text-3xl font-bold underline">Index</h1>
    </div>
  );
  return HtmlIndex;
};

export default Index;
