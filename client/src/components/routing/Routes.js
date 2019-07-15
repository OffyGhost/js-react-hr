import React from "react";
import { Route, Switch } from "react-router-dom";
import Register from "../auth/Register";
import Login from "../auth/Login";
import Alert from "../layout/Alert";
import Dashboard from "../dashboard/Dashboard";
import CreateProfile from "../profile-forms/CreateProfile";
import EditProfile from "../profile-forms/EditProfile";
import AddExperience from "../profile-forms/AddExperience";
import AddEducation from "../profile-forms/AddEducation";
import Profiles from "../profiles/Profiles";
import Profile from "../profile/Profile";
import Posts from "../posts/Posts";
import Post from "../post/Post";
import NotFound from "../layout/NotFound";
import PrivateRoute from "../routing/PrivateRoute";
import Dialogs from "../messages/Dialogs";
import Messages from "../messages/Messages";
import Friends from "../friends/Friends";
import Jobs from "../jobs/Jobs";
import Job from "../jobs/Job";
import JobForm from "../jobs/JobForm";

const Routes = () => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profiles" component={Profiles} />
        <Route exact path="/profile/:id" component={Profile} />
        <Route exact path="/jobs" component={Jobs} />
        <Route exact path="/jobs/:id" component={Job} />
        <PrivateRoute exact path="/edit-job/:id" component={JobForm} />
        <PrivateRoute exact path="/add-job" component={JobForm} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/create-profile" component={CreateProfile} />
        <PrivateRoute exact path="/edit-profile" component={EditProfile} />
        <PrivateRoute exact path="/add-experience" component={AddExperience} />
        <PrivateRoute exact path="/add-education" component={AddEducation} />
        <PrivateRoute exact path="/posts" component={Posts} />
        <PrivateRoute exact path="/posts/:id" component={Post} />
        <PrivateRoute exact path="/friends" component={Friends} />
        <PrivateRoute exact path="/dialogs" component={Dialogs} />
        <PrivateRoute exact path="/dialogs/:id" component={Messages} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
