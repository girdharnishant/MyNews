import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;

  const updateNews = async () => {
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=cd3996a1c4fa485d9bc057b2d406040e&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    props.setProgress(50);
    let data = await fetch(url);
    let parsedData = await data.json()
    props.setProgress(70);
    setPage(page + 1);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);

    props.setProgress(100);

  }

  useEffect(() => {
    updateNews();
  }, []);

  // handlePrevClick = async () => {
  //   this.setState({ page: page - 1 });
  //   this.updateNews();
  // }

  // handleNextClick = async () => {
  //   this.setState({ page: page + 1 });
  //   this.updateNews()
  // }

  const fetchMoreData = async () => {
    setPage(page + 1);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=cd3996a1c4fa485d9bc057b2d406040e&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  const { pageSize, country, category, mode } = props;
  return (
    <div style={{ margin: 'auto auto' }}>
      <h2 className="text-center" style={{ margin: '75px 50px 18px 0', color: props.mode === 'light' ? '#101010' : 'white' }}>MyMonkey - Top {props.category} Headlines</h2>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<Spinner />}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }>
        <div className="container">

          <div className="row">
            {articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <NewsItem title={(element.title && element.title.length > 44) ? element.title.slice(0, 44) + '...' : element.title} description={element.description && element.description.length > 44 ? element.description.slice(0, 80) + '...' : element.description} imageUrl={element.urlToImage} newsURL={element.url} author={element.author} date={new Date(element.publishedAt).getDate()} day={new Date(element.publishedAt).getDay()} month={new Date(element.publishedAt).getMonth()} badge={element.source.name} />
              </div>
            })}
          </div>
        </div>

      </InfiniteScroll>

    </div>
  )
}


News.defaultProps = {
  country: 'in',
  pageSize: 9,
  category: 'general',
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News