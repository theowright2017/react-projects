import React, {Component} from 'react'

// prop = userData

class Profile extends Component {
  render(){

    let data = this.props.userData;
    let followers = `${data.homeURL}/followers`;
    let following = `${data.homeURL}/following`;
    let repos = `${data.homeURL}/repositories`;

    if(data.notFound === "Not Found") {

        return(
          <div className="not-found">
            <h2>No data Found</h2>
          </div>
        )
    } else {
      return(
        <section className="github-profile">

          <div className="github-profile-info">

            <a href={data.homeURL} target="_blank" title={data.name || data.username}> <img src={data.avatar} /></a>

            <h2><a href={data.homeURL} title={data.username} target="_blank">{data.name || data.username}</a> </h2>

          </div>

          <div className="github-profile-state">
            <ul>
              <li>
                <a href={followers} target="_blank" title="numberOfFollowers"><i>{data.followers}</i><span>Followers</span></a>
              </li>
              <li>
                <a href={repos} target="_blank" title="numberOfRepositories"><i>{data.repos}</i><span>Repositories</span></a>
              </li>
              <li>
                <a href={following} target="_blank" title="numberOfFollowing"><i>{data.following}</i><span>Following</span></a>
              </li>
            </ul>
          </div>
        </section>
      )
    }



  }
};

export default Profile;
