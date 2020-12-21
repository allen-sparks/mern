/*This page provides access to all pages, good for passing data to all parts of the app*/
/*This is where you would also place the layout*/
//Even though layout is an html element here it renders the whole thing from Layout.js
import App from "next/app";
import Layout from "../components/_App/Layout"

class MyApp extends App {
  render() {
    const { Component } = this.props;
    
    return (
      <Layout>
        <Component/>
      </Layout>
    );
  }
}

export default MyApp;
