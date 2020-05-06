$(function() {

    // call text animation function
    var anim = false;
    function typed(finish_typing) {
        return function(term, message, delay, finish) {
            anim = true;
            var prompt = term.get_prompt();
            var c = 0;
            if (message.length > 0) {
                term.set_prompt('');
                var new_prompt = '';
                var interval = setInterval(function() {
                    var chr = $.terminal.substring(message, c, c+1);
                    new_prompt += chr;
                    term.set_prompt(new_prompt);
                    c++;
                    if (c == length(message)) {
                        clearInterval(interval);
                        // execute in next interval
                        setTimeout(function() {
                            // swap command with prompt
                            finish_typing(term, message, prompt);
                            anim = false
                            finish && finish();
                        }, delay);
                    }
                }, delay);
            }
        };
    }
    // call text animation function
    function length(string) {
        string = $.terminal.strip(string);
        return $('<span>' + string + '</span>').text().length;
    }
    var typed_prompt = typed(function(term, message, prompt) {
        term.set_prompt(message + ' ');
    });
    var typed_message = typed(function(term, message, prompt) {
        term.echo(message)
        term.set_prompt(prompt);
    });




    // init terminal
    $('#terminal').terminal(function(cmd, term) {






        var finish = false;
        var msg = "Wait I'm executing ajax call";
        term.set_prompt('> ');
            typed_message(term, msg, 10, function() {
                finish = true;
            });
        var args = {command: cmd};


        // tests
        /*
        this.set_mask('-').read('pass: ').then(pass => this.echo("Your password is " + pass));

        term.update(-1, "hello world");
        $.get('commands.php', args, function(result) {
            (function wait() {
                if (finish) {
                    term.echo(result);
                    
                    
                } else {
                    setTimeout(wait, 500);
                }
            })();
        });
        */
        var ul;
        var cmd;
        var empty = {
            options: [],
            args: []
        };
        var commands = {
            'get-command': {
                options: ['name', 'age', 'description', 'address'],
                args: ['clear']
            },
            'git': {
                args: ['commit', 'push', 'pull'],
                options: ['amend', 'hard', 'version', 'help']
            },
            'get-name': empty,
            'get-age': empty,
            'get-money': empty
        };

        
        
        // end tests

        
    },
    {
        name: 'xxx',

        greetings: ':rocket: [[!guib;#fff;#000]MICROBOT SYSTEMS®]\n'+
                'Ahmed M. Sulaimani (C) 2018 - 2020\n'+
                'https://master.samabusiness.sa/\n\n'+
                '[[;#ff5050;]COMMANDS >_master >_cdn >_dev >_api >_store]',
        width: '100%',
        onInit: function(term) {
            // first question

            var msg = "Welcome to Microbot Systems® :smiley:";
            // init-emojies
            $.get('https://unpkg.com/emoji-datasource').then(function(list) {
            $.terminal.emoji(list);
            names = list.map(function(emoji) { return emoji.short_name; });
            term.refresh();
        });

    // on-init tests
    /*$(function() {
        $('#terminal').terminal(function(command, term) {
            return $.post('script.php', {command: command});
        }, {
            greetings: 'Simple php example'
        });
    });*/

    $(function() {
        // $.terminal.syntax('php')

        //var php = uniter.createEngine('PHP');
        /*php.getStdout().on('data', function (text) {
            term.echo(text);
        });*/
        /*php.getStderr().on('data', function(text) {
            term.error(text);
        });*/
        

    });
    
        //term.echo("public/echo.php");
        //var url = './public/echo.php'; // CORS enabled

    // end of on-init tests

    function get(url) {
    return fetch(url).then(res => res.text()).then(text=>text.trim());
}
        typed_message(term, msg, 40, function() {
            typed_prompt(term, ":key: Enter your access key:", 60);
        });

    },
    keydown: function(e) {
        //disable keyboard when animating
        if (anim) {
            return false;
        }
    }
});

});