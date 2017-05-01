import React, {Component} from 'react'
import Logo from "./Logo";

export default class Home extends Component {
  render() {
    return (
      <div>
        <TitlePicture />
        <HowDif />
        <Whatis />
        <Demos />
        <Setup />
        <PoweredBy />
        <MoreInfo />
      </div>
    )
  }
}

class TitlePicture extends Component {
  render() {
    return (
      <div style={{background: "#446889", height: "700px", width: "100%", position: "absolute", textAlign: "center", paddingTop: "50px", color: "white", zIndex: "10"}}>
        <a href="https://github.com/jparkhurst3/Thundercats_LionPing"><img style={{position: "absolute", top: "0", right: "0", border:"0"}} src="https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png" /></a>
          <div style={{width: "30%", margin: "0 auto"}}>
            <Logo />
          </div>
        <h1>Step away from <strong>managing</strong> incidents. <br /> Focus on <strong>solving</strong> incidents</h1>
      </div>
    )
  }
}

class HowDif extends Component {
  render() {
    return (
      <div class="whiteSection" style={{paddingTop:"700px"}}>
      <div class="sectionWrapper">
        <h2 style={{fontSize:"50px"}}>Apart from the Pride</h2>
        <p class="longtext">
          Lion Ping is a new incident management (IcM) solution focused on simplicity,
          ease of use, and customized setups. Many other IcM solutions are too complex
          and too expensive for the needs of most teams. Lion Ping looks
        </p>
        </div>
      </div>
    )
  }
}

class Whatis extends Component {
  render() {
    return (
      <div class="graySection">
      <div class="sectionWrapper">
        <h2>Incident Management with Lion Ping</h2>
        <p class="longtext">
          An incident is an event that could lead to loss of, or disruption to,
          an organization operations, services or functions. If not managed an
          incident can escalate into an emergency, crisis or a disaster. Incident
          management is therefore the process of limiting the potential disruption
          caused by such an event, followed by a return to business as usual.
        </p>
        </div>
      </div>
    )
  }
}

class Demos extends Component {
  constructor() {
    super()
    this.state = {
      infoBlock: <DashInfo />,
      active: 1
    }
  }

  //only 4 buttons ever so why not. Also may want to customize each differently
  onDashClick = () => {
    console.log("on dash click")
    this.setState({
      infoBlock: <DashInfo />,
      active: 1,
    })
  }

  onServicesClick = () => {
    this.setState({
      infoBlock: <ServicesInfo />,
      active: 2
    })
  }

  onTeamsClick = () => {
    this.setState({
      infoBlock: <TeamsInfo />,
      active: 3

    })
  }

  onPingsClick = () => {
    this.setState({
      infoBlock: <PingsInfo />,
      active: 4
    })
  }

  render() {
    return (
      <div class="whiteSection">
        <h2>Showcase</h2>
        <div style={{display:"inline-block"}}>
          <DemoBlock icon={<i class="fa fa-tachometer fa-5x" aria-hidden="true"></i>} name="Dashboard" onClick={this.onDashClick} active={this.state.active == 1} />
          <DemoBlock icon={<i class="fa fa-database fa-5x" aria-hidden="true"></i>} name="Services & Escalation Policies" onClick={this.onServicesClick} active={this.state.active == 2} />
          <DemoBlock icon={<i class="fa fa-users fa-5x" aria-hidden="true"></i>} name="Teams & Schedules" onClick={this.onTeamsClick} active={this.state.active == 3} />
          <DemoBlock icon={<i class="fa fa-exclamation fa-5x" aria-hidden="true"></i>} name="Pings & Notifications" onClick={this.onPingsClick} active={this.state.active == 4} />
        </div>
        {this.state.infoBlock}
      </div>
    )
  }
}

class DemoBlock extends Component {
  render() {
    console.log("this.props.active")
    console.log(this.props.active)
    return (
      <div class={this.props.active ? "demo-block-active" : "demo-block"} onClick={this.props.onClick} >
        <div style={{color:"#446889"}}>{this.props.icon}</div>
        <h3 style={{position: "absolute", bottom:"0", width:"100%"}}><strong>{this.props.name}</strong></h3>
      </div>
    )
  }
}

class DashInfo extends Component {
  render() {
    return (
      <div class="whiteSection" style={{border:"none", textAlign:"justify", display:"inline-block"}}>
        <div style={{float:"left", width: "40%",paddingLeft:"40px", paddingRight:"40px", fontSize: "20px", paddingBottom:"0px"}}>
          <p class="longtext">
            <strong style={{fontSize: "30px"}}>The Dashboard </strong>
            shows all the information you need ...
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut leo et urna luctus viverra ut et arcu. Aenean rutrum ultricies enim sit amet egestas. Nullam hendrerit leo at mauris lacinia posuere. Etiam cursus felis ut lobortis varius. Morbi a finibus orci. Praesent mollis lorem vitae urna molestie, at condimentum magna accumsan. Morbi non nulla ullamcorper ligula tempor blandit. Integer nisl risus, semper ut libero sit amet, luctus tristique justo. In at euismod mi. Duis pretium dignissim nisl.
          </p>
        </div>
        <div style={{width:"60%", float:"right"}} >
          <img style={{width:"100%"}} src="../assets/Dash.png" />
        </div>
      </div>
    )
  }
}

class ServicesInfo extends Component {
  render() {
    return (
      <div class="whiteSection" style={{border:"none", textAlign:"justify", display: "inline-block"}}>
        <div style={{float:"left", width: "40%",paddingLeft:"40px", paddingRight:"40px", fontSize: "20px", paddingBottom:"0px"}}>
          <p class="longtext">
            <strong style={{fontSize: "30px"}}>Services </strong>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut leo et urna luctus viverra ut et arcu. Aenean rutrum ultricies enim sit amet egestas. Nullam hendrerit leo at mauris lacinia posuere. Etiam cursus felis ut lobortis varius. Morbi a finibus orci.
          </p>
          <p class="longtext">
            <strong style={{fontSize: "30px"}}>Escalation Policies </strong>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut leo et urna luctus viverra ut et arcu. Aenean rutrum ultricies enim sit amet egestas. Nullam hendrerit leo at mauris lacinia posuere. Etiam cursus felis ut lobortis varius. Morbi a finibus orci.
          </p>
        </div>
        <div style={{width:"60%", float:"right"}} >
          <img style={{width:"100%"}} src="../assets/Services.png" />
        </div>
      </div>
    )
  }
}

class TeamsInfo extends Component {
  render() {
    return (
      <div class="whiteSection" style={{border:"none", textAlign:"justify", display:"inline-block"}}>
        <div style={{float:"left", width: "40%",paddingLeft:"40px", paddingRight:"40px", fontSize: "20px", paddingBottom:"0px"}}>
          <p class="longtext">
            <strong style={{fontSize: "30px"}}>Teams </strong>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut leo et urna luctus viverra ut et arcu. Aenean rutrum ultricies enim sit amet egestas. Nullam hendrerit leo at mauris lacinia posuere. Etiam cursus felis ut lobortis varius. Morbi a finibus orci.
          </p>
          <p class="longtext">
            <strong style={{fontSize: "30px"}}>Schedules </strong>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut leo et urna luctus viverra ut et arcu. Aenean rutrum ultricies enim sit amet egestas. Nullam hendrerit leo at mauris lacinia posuere. Etiam cursus felis ut lobortis varius. Morbi a finibus orci.
          </p>
        </div>
        <div style={{width:"60%", float:"right"}} >
          <img id="limg" src="../assets/Teams.png" />
          <img id="rimg" src="../assets/Schedule.png" />
        </div>

      </div>
    )
  }
}

class PingsInfo extends Component {
  render() {
    return (
      <div class="whiteSection" style={{border:"none", textAlign:"justify", display:"inline-block"}}>
        <div style={{float:"left", width: "40%",paddingLeft:"40px", paddingRight:"40px", fontSize: "20px", paddingBottom:"0px"}}>
          <p class="longtext">
            <strong style={{fontSize: "30px"}}>Pings </strong>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut leo et urna luctus viverra ut et arcu. Aenean rutrum ultricies enim sit amet egestas. Nullam hendrerit leo at mauris lacinia posuere. Etiam cursus felis ut lobortis varius. Morbi a finibus orci.
          </p>
          <p class="longtext" style={{textAlign:"center"}}>
            <i class="fa fa-phone fa-2x" aria-hidden="true"></i>
            <i class="fa fa-slack fa-2x" aria-hidden="true"></i>
            <i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
            <i class="fa fa-comment fa-2x" aria-hidden="true"></i>
          </p>
        </div>
        <div style={{width:"60%", float:"right"}} >
          <img style={{width:"30%"}} src="../assets/iPhone.png" />
          <img style={{width:"70%"}} src="../assets/Pings2.png" />
        </div>
      </div>
    )
  }
}

class Setup extends Component {
  render() {
    return (
      <div class="graySection">
        <div class="sectionWrapper">
          <h2>Setup and Deployment</h2>
          <p class="longtext">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut leo et urna luctus viverra ut et arcu. Aenean rutrum ultricies enim sit amet egestas. Nullam hendrerit leo at mauris lacinia posuere. Etiam cursus felis ut lobortis varius. Morbi a finibus orci. Praesent mollis lorem vitae urna molestie, at condimentum magna accumsan. Morbi non nulla ullamcorper ligula tempor blandit. Integer nisl risus, semper ut libero sit amet, luctus tristique justo. In at euismod mi. Duis pretium dignissim nisl.
          </p>
        </div>
      </div>
    )
  }
}

class PoweredBy extends Component {
  render() {
    return (
      <div class="whiteSection">
      <div class="sectionWrapper">
        <h2>Powered By</h2>
        <p class="longtext" style={{textAlign:"center"}}>
          <img src="../assets/react.png" />
          <img src="../assets/nodejs.png" />
          <img src="../assets/mysql.png" />
          <img src="../assets/twilio.png" />
          <img src="../assets/slack.png" />
        </p>
        </div>
      </div>
    )
  }
}

class MoreInfo extends Component {
  render() {
    return (
      <div class="graySection">
      <div class="sectionWrapper">
        <h2>About the Devs</h2>
        <p class="longtext">
          Lion Ping is the result of a year long Senior Design project by Chris Clegg, Sam Ford, Zach Hancock, Hokeun Kim, and Joanna Parkhurst at Georgia Tech, from the Fall of 2016, to the Spring of 2017.
        </p>
        </div>

      </div>
    )
  }
}
