class Popover extends Component {
  constructor(props) {
    super(props)
    if (props.children.length !== 2) {
      devLog('Popover component requires exactly 2 children')
    }
  }

  render() {
    const { children, isOpen } = this.props
    return (
      <div>
        <div onClick={this.toggleIsOpen}>aaa</div>
        {isOpen ? children[1] : null}
      </div>
    )
  }
}

export default Popover
