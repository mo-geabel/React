import Welcome from "./Welcome";
import Code from "./Code";
export default function ConditionalComponents() {
  const display = true;
  let message = display ? <Welcome></Welcome> : <Code></Code>;
  return message;
}
