import React, { useEffect, useState } from 'react'
import './index.css'

function Card() {
  const [repositorys, setRepositorys] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'https://api.github.com/users/philhawksworth/repos'
      )
      const data = await response.json()

      setRepositorys(data)
    }

    fetchData()
  }, [])

  return (
    <div>
      <div className="container">
        {repositorys.map(repository => {
          return (
            <div className="item" key={repository.id}>
              <div className="title">
                <a href={repository.html_url}>{repository.name}</a>
              </div>

              <div className="description">{repository.description}</div>

              <div className="stats">
                <div className="statsNumber">
                  <img src={require('../../assets/star.svg').default} alt="" />
                  <div className="stars">{repository.stargazers_count}</div>

                  <img
                    src={require('../../assets/git-branch.svg').default}
                    alt=""
                  />
                  <div className="forks">{repository.forks}</div>
                </div>

                <div className="languageIcon">
                  <img
                    src={require('../../assets/yellipse.svg').default}
                    alt=""
                  />
                  <div className="language">{repository.language}</div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Card
