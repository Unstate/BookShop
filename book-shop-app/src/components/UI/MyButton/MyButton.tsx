import classes from './MyButton.module.css'

interface MyButtonProps {
    children: React.ReactNode;
}

export const MyButton: React.FC<MyButtonProps> = ({ children, ...props }) => {
    return (
        <div className={classes.myButtonContainer}>
            <button {...props} className={classes.myButton}>
                {children}
            </button>
        </div>
    )
}