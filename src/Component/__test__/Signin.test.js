import { fireEvent, render, screen } from "@testing-library/react"
import SignIn , {} from "../../Pages/SignIn/SignIn"
import { BrowserRouter } from "react-router-dom";


describe("Test the SignIn Component", () => {

    test("render the login form with submit button", async () => {
        render(<BrowserRouter><SignIn/></BrowserRouter>);
        const buttons = await screen.findAllByRole("button");
        expect(buttons).toHaveLength(1);
    });

    // test('Should display Error message when entering invalid email',  ( ) => {
    //     render(<BrowserRouter><SignIn/></BrowserRouter>);
    //     // const emailTextFields = screen.getByLabelText('First_name');
    //     const emailField = screen.getByTestId("emailtextfield");
    //     expect(emailField).toBeInTheDocument();
    //     fireEvent.change(emailField, { target: { value : 'ritvik@1234'}})
    //     const login = screen.getByTestId('loginbtm');
    //     fireEvent.click(login);
    //     const emailError = screen.getByText('Enter a valid email');
    //     expect(emailError).toBeInTheDocument();
    // })



}); 