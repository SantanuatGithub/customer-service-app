const URL = '/api/cases';
let cases = [];
export const getCases = () => fetch(URL)
  .then(response => {
    if (!response.ok) {
      throw new Error('No response from server');
    }
    return response.json();
  })
  .then(result => {
    cases = result.data;
    return cases;
  });