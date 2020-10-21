// getNewsArticles API fetch logic
// TO DO: UPDATE search 

export const getNewsArticles = async() => {
  const res = await fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
  const data = await res.json();
  const articlesList = await data.articles;
  return articlesList;
}
