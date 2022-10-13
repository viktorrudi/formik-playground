import { Shell } from "./ui/templates/Shell";
import { ThemeProvider } from "./ui/foundation/Themeprovider";
import { ContactForm } from "./components/forms/ContactForm/ContactForm";

function App() {
  return (
    <ThemeProvider>
      <Shell>
        <ContactForm />
      </Shell>
    </ThemeProvider>
  );
}

export default App;
