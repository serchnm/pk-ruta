import { useContext } from 'react';
import NavigationContext from '../context/navigation';
import classNames from 'classnames';
import '../styles/link.css'

const Link = ({ to, children, className, activeClassName }) => {
  const { navigate, currentPath } = useContext(NavigationContext);
  const classes = classNames(
    'red',
    className,
    currentPath === to && activeClassName
    );
  const handleClick = (event) => {
    if(event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    navigate(to);
  }
  return <a className={classes} onClick={handleClick} href='/#'>{children}</a>
}

export default Link;