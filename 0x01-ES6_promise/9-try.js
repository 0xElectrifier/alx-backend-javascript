export default function guardrail(mathFunction) {
  let result;
  try {
    result = mathFunction();
  } catch (e) {
    result = e.message;
  }
  return [result, 'Guardrail was processed'];
}
