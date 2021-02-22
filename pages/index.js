import Home from '../components/Home';
import Layout from '../components/Layout';
import getChoffer from '../shared/choffers';

export default function App() {
  return (
    <div>
      <Home/>
    </div>
  )
}


export const getStaticProps = () => {

  const choffer = getChoffer();
  return {
    props: {
      choffer
    },
  }
}

App.Layout = (props) => {
  console.log(props)
  return (
    <Layout children={props.children} choffer={props.children.props.choffer}/>
  )  
}

