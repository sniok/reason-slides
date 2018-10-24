import { swiss } from "mdx-deck/themes";
import okaidia from "react-syntax-highlighter/styles/prism/okaidia";
import reason from "react-syntax-highlighter/languages/prism/reason";

export default {
  ...swiss,
  prism: {
    style: okaidia,
    languages: {
      reason: reason
    }
  }
};
