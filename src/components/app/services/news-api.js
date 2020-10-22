// getNewsArticles API fetch logic

export const getNewsArticles = async(search) => {
  const res = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
  const data = await res.json();
  const articlesList = await data.articles;
  return articlesList;
}
