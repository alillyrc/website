import React from 'react';

const dummy = {
    projects: [{
        name: 'Stressmonster',
        id: 0,
        published: true,
        summary: (<section><h3>title</h3><p>some short text</p><a href="#">More</a></section>),
        description: (
            <main>
                <h1>Stressmonster</h1>
                <h2>About</h2>
                <p>lorem ipsum dolor sti asdfmed asöfdgh sldfg 
                    <a href="#">soem link</a>
                text bla bla saldf dfkjbsdlfh ua sdf asd, dkgd,d gdfkgr d,sgr</p>
                <h2>About</h2>
                <p>lorem ipsum dolor sti asdfmed asöfdgh sldfg
                     <a href="#">soem link</a>
                text bla bla saldf dfkjbsdlfh ua sdf asd, dkgd,d gdfkgr d,sgr</p>
                <h2>About</h2>
                <p>lorem ipsum dolor sti asdfmed asöfdgh sldfg
                     <a href="#">soem link</a>
                text bla bla saldf dfkjbsdlfh ua sdf asd, dkgd,d gdfkgr d,sgr</p>
            </main>
        ),
        aspects: [{
            name: 'photo',
            preview: 'path to img',
            gallery: ['path to img','path to img','path to img',],
        }]
    },
    {
        name: 'Stressmonster2',
        id: 1,
        published: true,
        summary: (<section><h3>title</h3><p>some short text</p><a href="#">More</a></section>),
        description: (
            <main>
                <h1>Stressmonster</h1>
                <h2>About</h2>
                <p>lorem ipsum dolor sti asdfmed asöfdgh sldfg</p>
            </main>
        ),
        aspects: [{
            preview: 'path to img',
            gallery: ['path to img','path to img','path to img',],
        }]
    },
    {
        name: 'Stressmonster3',
        id: 2,
        published: true,
        summary: (<section><h3>title</h3><p>some short text</p><a href="#">More</a></section>),
        description: (
            <main>
                <h1>Stressmonster</h1>
                <h2>About</h2>
                <p>lorem ipsum dolor sti asdfmed asöfdgh sldfg</p>
            </main>
        ),
        aspects: [{
            preview: 'path to img',
            gallery: ['path to img','path to img','path to img',],
        }]
    },
    {
        name: 'Typo',
        published: true,
        id: 3,
        summary: (<section><h3>title</h3><p>some short text</p><a href="#">More</a></section>),
        description: (
            <main>
                <h1>Stressmonster</h1>
                <h2>About</h2>
                <p>lorem ipsum dolor sti asdfmed asöfdgh sldfg</p>
            </main>
        ),
        aspects: [{
            preview: 'path to img',
            gallery: ['path to img','path to img','path to img',],
        }]
    },
    {
        name: 'Test',
        id: 4,
        published: false,
        summary: (<section><h3>title</h3><p>some short text</p><a href="#">More</a></section>),
        description: (
            <main>
                <h1>Stressmonster</h1>
                <h2>About</h2>
                <p>lorem ipsum dolor sti asdfmed asöfdgh sldfg</p>
            </main>
        ),
        aspects: [{
            preview: 'path to img',
            gallery: ['path to img','path to img','path to img',],
        }]
    }],
    legal: (
        <main>
            <h1>Stressmonster</h1>
            <h2>About</h2>
            <p>lorem ipsum dolor sti asdfmed asöfdgh sldfg</p>
        </main>
    ),
    contact: (
        <main>
            <h1>Stressmonster</h1>
            <h2>About</h2>
            <p>lorem ipsum dolor sti asdfmed asöfdgh sldfg</p>
        </main>
    )
}

export default dummy;