export class Main {
    public static start(input: string) {
        let answer1 = this.part1(input.split("\r\n"));
        let answer2 = this.part2(input.split("\r\n"));
        return [answer1, answer2];
    }

    public static part1(input: string[]) {
        let particles: Particle[] = [];
        for (let i = 0; i < input.length; i++) {
            const elements: string[] = input[i].split(", ");
            let posx, posy, posz, accx, accy, accz, velx, vely, velz;
            for (let j = 0; j < elements.length; j++) {
                const element = elements[j].split("<")[1].split(">")[0];
                const values = element.split(",");
                switch (j) {
                    case 0:
                        posx = parseInt(values[0]);
                        posy = parseInt(values[1]);
                        posz = parseInt(values[2]);
                        break;
                    case 1:
                        velx = parseInt(values[0]);
                        vely = parseInt(values[1]);
                        velz = parseInt(values[2]);
                        break;
                    case 2:
                        accx = parseInt(values[0]);
                        accy = parseInt(values[1]);
                        accz = parseInt(values[2]);
                        break;

                }
            }
            particles.push(new Particle(i, posx, posy, posz, velx, vely, velz, accx, accy, accz));
        }
        let equals: number = 0;
        let lastId = 0;
        for (let j = 0; j < 1000; j++) {
            let id = 0;
            let distance = 0;
            for (let i = 0; i < particles.length; i++) {
                particles[i].velx += particles[i].accx;
                particles[i].vely += particles[i].accy;
                particles[i].velz += particles[i].accz;
                particles[i].posx += particles[i].velx;
                particles[i].posy += particles[i].vely;
                particles[i].posz += particles[i].velz;
            }
        }

        let distance = (o) => {
            return Math.abs(o.posx) + Math.abs(o.posy) + Math.abs(o.posz)
        };
        particles.sort((a, b) => distance(a) - distance(b));
        return particles[0].id;
    }

    public static part2(input: string[]) {
        let particles: Particle[] = [];
        for (let i = 0; i < input.length; i++) {
            const elements: string[] = input[i].split(", ");
            let posx, posy, posz, accx, accy, accz, velx, vely, velz;
            for (let j = 0; j < elements.length; j++) {
                const element = elements[j].split("<")[1].split(">")[0];
                const values = element.split(",");
                switch (j) {
                    case 0:
                        posx = parseInt(values[0]);
                        posy = parseInt(values[1]);
                        posz = parseInt(values[2]);
                        break;
                    case 1:
                        velx = parseInt(values[0]);
                        vely = parseInt(values[1]);
                        velz = parseInt(values[2]);
                        break;
                    case 2:
                        accx = parseInt(values[0]);
                        accy = parseInt(values[1]);
                        accz = parseInt(values[2]);
                        break;

                }
            }
            particles.push(new Particle(i, posx, posy, posz, velx, vely, velz, accx, accy, accz));
        }
        let equals: number = 0;
        let lastId = 0;
        for (let j = 0; j < 10000; j++) {
            let id = 0;
            let distance = 0;
            for (let i = 0; i < particles.length; i++) {
                particles[i].velx += particles[i].accx;
                particles[i].vely += particles[i].accy;
                particles[i].velz += particles[i].accz;
                particles[i].posx += particles[i].velx;
                particles[i].posy += particles[i].vely;
                particles[i].posz += particles[i].velz;
            }
            let toRemove: Particle[] = [];
            for (let i = 0; i < particles.length - 1; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    let distance = Math.abs(particles[i].posx - particles[j].posx)==0 && Math.abs(particles[i].posy - particles[j].posy)==0 && Math.abs(particles[i].posz - particles[j].posz)==0;
                    if (distance==true) {
                        toRemove.push(particles[i]);
                        toRemove.push(particles[j]);
                    }
                }
            }
            particles=particles.filter(a =>{
                for (let i = 0; i < toRemove.length; i++) {
                    const element = toRemove[i];
                    if(element.id==a.id){
                        return false;
                    }
                }
                return true;
            });
        }
        return particles.length;
    }
}

class Particle {
    constructor(public id, public posx, public posy, public posz,
        public velx, public vely, public velz,
        public accx, public accy, public accz,
    ) {
    }
}