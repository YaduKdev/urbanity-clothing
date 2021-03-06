import { SpinnerContainer, SpinnerOverlay } from './With-Spinner.styles';

const WithSpinner = WrappedComponent => {
    const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading? (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ) : (
        <WrappedComponent {...otherProps} />
    )
}
return Spinner;
}

export default WithSpinner;