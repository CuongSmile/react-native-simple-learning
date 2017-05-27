import React, { Component } from 'react';

export default class BaseComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    _navigateTo = (routeName) => {
        this.props.navigation.navigate(routeName)
    }
      _navigateTo = (routeName, data) => {
        this.props.navigation.navigate(routeName, data)
    }
}