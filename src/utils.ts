import fs from 'fs';

export function fileToMatrix(path: string) {
  const allFileContent = fs.readFileSync(path, 'utf8').trim();
  const lines = allFileContent.split('\n');
  const cols = lines[0].split(',');
  const matrix: number[][] = []; 
  lines.forEach(_ => matrix.push([]));
  for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < cols.length; j++) {
      matrix[i][j] = parseInt(lines[i].split(',')[j]);
    }
  }
  return matrix;
}

