module objects {
    // OBSTACLES CLASS ++++++++++++++++++++++++++++++++++++
    export class Enemy extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++

        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor(enemyType: string) {
            super(enemyType);

            this._reset(this._leftBounds);
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value: number): void {
            // check to see if the obstacles met the reset criteria
            if (this.x >= value) {
                this._reset(this._leftBounds);
            }
        }

        // reset the obstacles offscreen
        protected _reset(value: number): void {
            // behaviour of objects
            this._speed.x = Math.floor(Math.random() * 5) + 2;
            
            // location of objects
            this.y = Math.floor(Math.random() * this._bottomBounds);
            this.x = value;
        }


        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update(): void {
            // scroll the obstacles
            this.x += this._speed.x;
            this._checkBounds(this._rightBounds);
        }
    }
}