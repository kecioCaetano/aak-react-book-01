import * as ReactDOM from "react-dom/client";
import MyFeature from "./MyFeature";
import ArticleList from "./ArticleList";
import AddArticle from "./AddArticle";

export default function App() {
  return (
    <MyFeature
      addArticle={({
        title,
        summary,
        onChangeTitle,
        onChangeSummary,
        onClickAdd,
      }) => (
        <AddArticle
          name="Articles"
          title={title}
          summary={summary}
          onChangeTitle={onChangeTitle}
          onChangeSummary={onChangeSummary}
          onClickAdd={onClickAdd}
        />
      )}
      articleList={({ articles, onClickRemove }) => (
        <ArticleList articles={articles} onClickRemove={onClickRemove} />
      )}
    />
  );
}
