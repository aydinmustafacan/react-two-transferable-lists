import React from 'react';
import "./tic-tac-toe.css";
import styles  from './tic-tac-toe.module.css'

export function TicTacToeApp() {
  return (
    <div>
      <h1 className={'appHeader'}> Tic Tac Toe Mustafa </h1>
      <h2 className={styles.anotherClassName}> Some info here</h2>
    </div>
  );
}
