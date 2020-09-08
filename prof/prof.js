const Discord = require('discord.js');
var schedule = require('node-schedule-tz');
var logger = require('winston');
var auth = require('./auth.json');
var fs = require('fs');
//const pkfcs = require('./pokefact.js') 
const Pokedex = require('pokedex-promise-v2');

var auth = require('./auth.json');

const pm = new Pokedex();
let amoximute = false;
let prefix = ';';
const client = new Discord.Client()
const valorid = '439191102663163905';
const mysticid = '439191401104801793';
const instictid = '439191557212602390';
const travelerid = '490816651764170754';
const welcomeid = '490760429178454026';
const screenshotchannel = '645277850148274195';
const adminid = '439190762698178581';
const modid =  '513733420384387083';
const showoffid = '513791080412741652';
const hundoid = '513402655058558976';
const exraidchannel = '466702547659522048';
const amoxilinid = '257844172436930560';
const levelchangeid = '659816105623420929';
const nosferatuid =  '364525165863895041';
const levelchangereportid = '660084982366339072';
const talkedRecently = new Set();
client.login('NjIzNjk5MDg5MDgyNjc5MzA3.XYGRZw.KMcpfHmm_rz-v38i0MKXpi6GNyM')
.catch(console.error);

client.on('disconnected', function() {
    client.login('NjIzNjk5MDg5MDgyNjc5MzA3.XYGRZw.KMcpfHmm_rz-v38i0MKXpi6GNyM')
	.catch(console.error);
});


client.login('NjIzNjk5MDg5MDgyNjc5MzA3.XYGRZw.KMcpfHmm_rz-v38i0MKXpi6GNyM');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('γράψε ;helprof για βοήθεια.')

/*   if (fs.existsSync('/root/prof/date.txt')){
    fs.readFile('date.txt', 'utf8', function(err, data) {
      if (err) throw err;
      console.log(data);
    
  var words = data.split(',');
  var year = words[0];
  var month = words[1];
  var day = words[2];
  var hour = words[3];
  var min = words[4];
  var sec = words[5];
  var date = new Date(year, month, day, hour, min, sec);
  var j = schedule.scheduleJob(date, function() {
    client.channels.get('625412044316999719').send('Time is up');
    j.cancel();
    return;
  }); 
})
} */
});




client.on("guildMemberAdd", member  => {
  var welcometable = [`Καλώς ήρθες στην κοινότητα Pokemon-Go του Ρεθύμνου, ${member} ! Είμαι ο Προφέσορας. Για να γίνεις μέλος της κοινότητας θα θέλαμε να μας πεις το όνομα σου, το level σου και την ομάδα στην οποία ανήκεις σε μια σειρά με την εντολή: ${prefix}register [nickname] [επίπεδο] [ομάδα] με κενά ανάμεσα, (παράδειγμα: ${prefix}register Mitsos23 40 instict), αν είσαι απλός επισκέπτης στην πόλη του Ρεθύμνου και θα μείνεις για λίγο αντί για ομάδα παρακαλώ γράψε 'traveler'.\n\nfor english, type ${prefix}eng`,
  `Δεν νομίζω να έχουμε γνωριστεί ακόμα, ${member}, εγώ είμαι ο Προφέσορας το μποτάκι γενικής χρήσεως αυτού εδώ του Server, δυστυχώς όταν δεν είσαι γραμμένος στον Server δεν μπορείς να δεις τα υπόλοιπα κανάλια, το να γραφτείς είναι εύκολο, απλά γράψε εδώ σε ένα μήνυμα την εντολή ${prefix}register, το nickname σου στο pokemon go, το επίπεδο σου και την ομάδα σου με σειρά [Nickname] [επίπεδο] [ομάδα] με κενά ανάμεσα, (πχ: ${prefix}register Lakis44 39 Valor), αν είσαι επισκέπτης στο Ρέθυμνο αντί για ομάδα γράψε 'traveler'.\n\nfor english, type ${prefix}eng`,
  `Ωπ, ένας άγριος ${member} εμφανίστηκε! Ας συστηθώ ωστόσο γιατί μόνο αυτό ξέρω να κάνω σε αυτήν την λειτουργία, είμαι ο Προφέσορας, για να γίνεις μέλος στην κοινότητα (και να ξεκλειδώσεις τα υπόλοιπα κανάλια πρέπει να ''γραφτείς''. Αυτό το κάνεις απλά γράφοντας την εντολή ${prefix}register, το όνομα σου, το επίπεδο σου και την ομάδα στην οποία ανήκεις (πχ: ${prefix}register Makis69 37 Instict), πρόσεχε τα κενά μεταξύ των λέξεων. να είσαι απλά επισκέπτης στο μαγευτικό Ρέθυμνο αντί για την ομάδα σου γράψε 'Traveler'.\n\nfor english, type ${prefix}eng`,
  `Καλώς τον ${member}, κι άρχισα να νιώθω μόνος. Είμαι ο Προφέσορας, το πιο cringe μποτάκι που υπάρχει, επίσης βοηθάω στον σέρβερ... κάπως. Για να πάρεις μέρος στην κοινότητα απλά γράφεις σε αυτό το κανάλι την εντολή ${prefix}register, το όνομα, το επίπεδο σου και την ομάδα στην οποία ανήκεις με κενά ανάμεσα (Πχ ${prefix} Pakis420 36 Valor), αν είσαι απλά επισκέπτης στο Ρέθυμνο απλά αντί για ομάδα γράψε 'Traveler' , όπως λέμε Graveler.\n\nfor english, type ${prefix}eng`
];
var randomizer = Math.floor(Math.random() * welcometable.length);
 setTimeout(()=> { client.channels.get(welcomeid).send(welcometable[randomizer])},3000);
  return;
});



client.on("message", message => {
  if (message.author.bot) return;
  let prefix = ';';

  if ((message.channel.id == showoffid) && (message.author.id === nosferatuid)){
    if (message.attachments.size > 0) {
      message.react('😒')
         .catch(console.error);
         return;
     }  
  }

  if (message.channel.id == showoffid){
          if (message.attachments.size > 0) {
           message.react('✨')
              .catch(console.error);
              return;
          }
  }

  if (message.channel.id == hundoid){
          if (message.attachments.size > 0) {
           message.react('💯')
              .catch(console.error);
              return;
          }
  }
if ((message.channel.id == welcomeid) && (message.content.startsWith(prefix + "eng"))){
  message.reply(`Welcome in the Rethymnian Community of Pokemon-go, my name is "The Professor", a bot made for this server for your convinience. In order to gain access to the other channels of the community you will first need to register. you can do it just by just typing the command "${prefix}register [name] [level] [team]. I will use an example, the command must be like this: ${prefix}register john123 40 valor . If you are staying on Rethymno temporarily you may as well type "Traveler" instead of your team's name on register command.`);
  return;

}
if ((message.channel.id == welcomeid) && (message.content.startsWith(prefix + "register"))){
  var words = message.content.split(' ');
  var name = words[1];
  var number = words[2];
  var team = words[3];
  if (typeof words[1] === "undefined" || typeof words[2] === "undefined" || typeof words[3] === "undefined"){
    message.reply("Έγινε κάποιο λάθος. Πρόσεχε τα κενά.")
    return;
  }
  team = team.toLowerCase();

    if (message.member.roles.get(modid) || message.member.roles.get(adminid)){
      message.author.send("Δεν μπορώ να σου αλλάξω όνομα η να σου θέσω έναν ρόλο.")
      .catch(console.error);
      message.delete();
      return;
    }
    if (name.includes('valor') == 1 || name.includes('mystic') == 1 || name.includes('instict') == 1 || name.includes('traveler') == 1   ){
      message.reply("Το πρώτο στοιχείο που έγραψες δεν ειναι το όνομά σου, Πρέπει να γράψεις πρώτα το όνομα σου στο Pokemon-go μετά το επίπεδο σου και μετά την ομάδα στην οποία ανήκεις");
      return;
    }
     if (name.length < 3){
      message.reply("Το πρώτο στοιχείο που έγραψες δεν ειναι το όνομά σου, Πρέπει να γράψεις πρώτα το όνομα σου στο Pokemon-go μετά το επίπεδο σου και μετά την ομάδα στην οποία ανήκεις");
      return;
    }
     if (isNaN(number)){
      message.reply("Το δεύτερο στοιχείο που έγραψες δεν ειναι το επίπεδο σου, Πρέπει να γράψεις πρώτα το όνομα σου στο Pokemon-go μετά το επίπεδο σου και μετά την ομάδα στην οποία ανήκεις");
      return;
    }
      if (number > 40 || number < 1 ) {
      message.reply("Το δεύτερο στοιχείο που έγραψες δεν ειναι το επίπεδο σου, Πρέπει να γράψεις πρώτα το όνομα σου στο Pokemon-go μετά το επίπεδο σου και μετά την ομάδα στην οποία ανήκεις");
      return;
    }
    else {
      if (team.includes("valor")){
      message.member.setNickname(name+" | "+number)
      .catch(console.error);
      message.member.addRole(valorid)
      .catch(console.error);
      screenShot();
      return;
    }
     if (team.includes("mystic")){
      message.member.setNickname(name+" | "+number)
      .catch(console.error);
      message.member.addRole(mysticid)
      .catch(console.error);
      screenShot();
      return;
    }
     if (team.includes("instict")){
      message.member.setNickname(name+" | "+number)
      .catch(console.error);
      message.member.addRole(instictid)
      .catch(console.error);
      screenShot();
      return;
    }
     if (team.includes("traveler")){
      message.member.setNickname(name+" | "+number)
      .catch(console.error);
      message.member.addRole(travelerid)
      .catch(console.error);
      screenShot();
      return;
    }
    else {
      message.reply("Η ομάδα που έβαλες δεν είναι σωστή, θα πρέπει να είναι το τρίτο στοιχείο που θα γράψεις");
      return;
    }
  }
}

if (message.content.startsWith(prefix + "bulkdelete") && (message.member.roles.get(modid) || message.member.roles.get(adminid))){
  let cont = message.content.slice(prefix.length).split(" ");
  let args = cont.slice(1);
  var bdelete = message.content.split(' ');
  var commandpart= bdelete[0];
  var numberpart = bdelete[1];
  if (isNaN(numberpart)){
    message.author.send("Το δεύτερο στοιχείο που έγραψες πρέπει να είναι ο αριθμός των μυνημάτων που θες να διαγράψεις.");
    message.delete()
    return;
  }
  async function purge(){
    message.delete();
    const fetched = await message.channel.fetchMessages({limit: args[0] });
    console.log(fetched.size + 'message found, deleting...');
    message.channel.bulkDelete(fetched)
    .catch(error => message.author.send(`Error: ${error}`));
  }

  purge();
  return;
}

if (message.content.startsWith(prefix + "shuthimuppls") && (message.member.roles.get(modid) || message.member.roles.get(adminid))){
  amoximute = true;
  return;
}
if (message.content.startsWith(prefix + "unshuthimuppls") && (message.member.roles.get(modid) || message.member.roles.get(adminid))){
  amoximute = false;
  return;
}
if ((message.author.id === amoxilinid) && (amoximute == true)){
  message.delete();
  return;
}
if ((message.channel.id == levelchangeid) && (message.content.startsWith("levelup"))){
  if (talkedRecently.has(message.author.id)) {
    message.author.send("Η εντολή αυτή μπορεί να ενεργοποιηθεί μια φορά κάθε 24 ώρες απο κάθε χρήστη.");
    message.delete()

  } else {
  var keypart = message.content.split(' ');
  var newlevel = keypart[1];
  if (newlevel > 40 || isNaN(newlevel) || newlevel <=0){
    message.author.send("To επίπεδο που έγραψες δεν είναι σωστό.")
    message.delete();
    return;
  }

  nickname = message.guild.members.get(message.author.id).displayName
  var words= nickname.split(' ');
  var name = words[0];
  var oldlevel = words[2];
  var title = words[3];
  if (message.member.roles.get(modid) || message.member.roles.get(adminid)){
    message.author.send("Δεν μπορώ να σου αλλάξω όνομα η να σου θέσω έναν ρόλο.")
    .catch(console.error);
    message.delete();
    return;
  }
  if ((typeof words[2] === "undefined") || (isNaN(oldlevel))){
    message.author.send("Υπάρχει κάποιο λάθος στον τρόπο γραφής του ψευδώνυμού σου. Παρακαλώ μίλα με τους διαχειριστές η συντονιστές.")
    message.delete();
    return;
  }
   if (newlevel == oldlevel){
    message.author.send("Το νέο σου επίπεδο και το παλιό σου επίπεδο δεν μπορούν να είναι τα ίδια.")
    message.delete();
    return;
  }
   if (oldlevel == 40){
    message.author.send("Είσαι ήδη στο ανώτατο επίπεδο στο pokemon-go δεν μπορείς να αυξομειώσεις επίπεδα.")
    message.delete();
    return;
  }
  if (words[3]){
	message.member.setNickname(name+" | "+newlevel+" "+title)
	message.delete();
	return;
  }
  message.member.setNickname(name+" | "+newlevel)
  message.delete();
  if (newlevel < oldlevel){
  message.author.send(`Το επίπεδο σου έπεσε στο ${newlevel}`)
  client.channels.get(levelchangereportid).send(`ο ${message.author} έπεσε απο επίπεδο ${oldlevel} σε επίπεδο ${newlevel}`)
  }
  else if(newlevel > oldlevel){
    message.author.send(`Το επίπεδο σου ανέβηκε στο ${newlevel}`)
    client.channels.get(levelchangereportid).send(`ο ${message.author} ανέβηκε απο επίπεδο ${oldlevel} σε επίπεδο ${newlevel}`)
  }
talkedRecently.add(message.author.id);
setTimeout(() => {
  talkedRecently.delete(message.author.id);
}, 86400000);
}
}else if(message.channel.id == levelchangeid){
  message.delete()
  return;
}

  if (!message.content.startsWith(prefix) || message.author.bot) return;
    
    if ((message.content.startsWith(prefix + "repeat")) && (message.member.roles.get(modid) || message.member.roles.get(adminid))){
      var repeatable = message.content.split(';repeat ');
      var repeat = repeatable[1];
      message.channel.send(repeat)
      .catch(console.error);
      message.delete()
      return;
    }
  

    if (message.content.startsWith(prefix + "pokefacts") || message.content.startsWith(prefix + "pokefact")){
      pokeFacts();
      return;
    };
    

      function pokeFacts (){
        var facts = ["Ανάποδα το όνομα ekans γράφεται 'snake' που σημαίνει φίδι και η εξέλιξη του, το arbok, ανάποδα διαβάζεται'Kobra'(κόμπρα)", 
        "Το όνομα του Mareep είναι αναγραμματισμός της λέξης Ampere (αμπέρ), που είναι μονάδα μέτρησης της έντασης του ηλεκτρικού ρεύματος", 
        "Το Missingno απο προγραμματιστικής άποψης είναι μια κενή θέση στο pokedex, ακριβώς λόγω αυτού με μια ειδική διαδικασία μπορεί να γίνει όποιο pokemon ήθελε ο χρήστης.",
        "Το Rhydon είναι το πρώτο pokemon που δημιουργήθηκε και καταχωρήθηκε στο pokedex",
        "Τα pokemon τύπου psychic είναι αδύναμα απέναντη σε επίθέσεις Dark(σκοτάδι), ghost(φαντάσματα) και bug(έντομο) γιατί αυτές είναι οι πιο κοινές φοβίες που συναντάς στον άνθρωπο",
        "Αν υπήρχε θεωρητικά ένα pokemon με όλους τους τύπους μαζί, η μοναδική του αδυναμία θα ήταν η πέτρα (rock)",
        "Το Xatu μπορεί να βλέπει μαζί το μέλλον και το παρελθόν, γι' αυτόν και μένει συνέχεια σιωπηλό, επειδή βλέπει όλα τα τρομερά πράγματα που μπορεί να συμβούν αλλα δεν μπορεί να κάνει τίποτα γι' αυτό",
        "To cubone φοράει το κρανίο της νεκρής του μάνας",
        "Όσο το spoink πηδάει τόσο η καρδιά του συνεχίζει να χτυπάει, αν σταματήσει να πηδάει, πεθαίνει.",
        "Το yanmask είναι στην πραγματικότητα ένας νεκρός άνθρωπος και κουβαλάει πάντα μαζί του μια μάσκα. Η μάσκα του έχει το σχήμα του προσώπου του όταν ήταν ζωντανός. Μερικές φορες την κοιτάζει και κλαίει.",
        "Το Hitmonchan και το Hitmonlee έχουν πάρει την ονομασία τους απο τους Jackie Chan και Bruce Lee αντίστοιχα.",
        "Το Arcanine στην αρχή σχεδιάζανε να το έχουνε σαν θρυλικό pokemon, στο pokedex ακόμα χαρακτηρίζεται ως 'θρυλικό' pokemon.",
        "Η μασκότ των pokemon αρχικα σχεδίαζοταν να γίνει το clefairy, και όντως η ιαπωνική σειρά των manga στα pokemon ο πρωταγωνιστής έχει ένα clefairy για pokemon, ωστόσο όταν πήγε να περάσει απο το παιχνίδι στην τηλεόραση, οι δημιουργοί αποφάσισαν ότι το Pikachu θα ήταν καλύτερη επιλογή",
        "Μια θεωρία εικάζει ότι το ditto ήταν μια αποτυχημένη προσπάθεια κλωνοποίησης του mew, γι' αυτό και στις πρώτες κασέτες βρισκόταν σε μέρη που είχαν να κάνουμε με το mew (πx: cinnabar mansion, cerulean cave), επίσης γι' αυτό μόνο το mew και το ditto την μαθαίνουν ανεβαίνοντας επίπεδα και γι' αυτο οι shiny μορφες και των δύο είναι το ίδιο χρώμα (μπλέ).",
        "To Rotom είναι πρακτικά ένα pokemon μοτέρ. Μπαίνει σε διάφορες ηλεκτρονικές συσκευές και τις ελέγχει (πχ: ψυγεία, φούρνους, ανεμιστήρες, πλυντήρια, μηχανή του γκαζόν και pokedex). To όνομα Rotom αν το διαβάσεις ανάποδα είναι Motor (μοτέρ).",
        "Στα παιχνίδια το smeargle μπορει να μάθει σχεδόν όλες τις επιθέσεις του παιχνιδιού με την κίνηση sketch.",
        "Το σώμα του wobbufet είναι στην πραγματικότητα αντιπερισπασμός, το αληθινό του 'σώμα' είναι στην πραγματικότητα η ουρά του (η μαύρη με τα μάτια).",
        "O Καθηγητής oak (εγω δηλαδή) κανονικά σχεδιαζόταν να μπορεί ο παίκτης να τον πολεμήσει στο παιχνίδι και είχε πολύ δυνατά pokemon + το pokemon που ποτέ δεν επέλεξε κανείς, ακυρώθηκε το σχέδιο αυτό τελευτάια στιγμή ωστόσο μπορείς ακόμα να τον πολεμήσεις μέσω glitch.",
        "Στην ιαπωνία με μια ειδική συσκευή σαν καλώδιο η pokemon crystal μπορούσε να επικοινωνεί με το κινητό τηλέφωνο του χρήστη, μέσω του κινητού ο χρήστης μπορούσε να πάρει online διάφορα events όπως Celebi.",
        "Η περιοχή kanto είναι βασισμένη στην ομόνημη πόλη της ιαπωνίας.",
        "Τα ονόματα των θρυλικών πουλιών ArticUNO, ZapDOS και MolTRES κρύβουν μέσα τους τους αριθμούς 'Ένα, δύο τρία' στα Ισπανικά.",
        "H Ruby, Η Sapphire και η Emerald είναι οι μόνες κασέτες στις οποίες είχες πατέρα.",
        "To Ιαπωνικό όνομα του ash(Satoshi)είναι φόρος τιμής στον διευθυντή της game freak, 'Satoshi Tajiri', ενώ το ιαπωνικό όνομα του Gary είναι φόρος τιμής στον δημιουργό του Mario του Zelda και άλλων διάσημων παιχνιδιών, Shigeru Miyamoto ",
        "Καθώς το Paras μεγαλώνει ο μύκτητας στην πλάτη του μεγαλώνει επίσης, όταν εξελίσεται σε parasect το μανιτάρι παίρνει ολόκληροτικα τον έλεγχο του σώματος του Paras και το αληθινό Paras πεθαίνει.",
        "Το 2011 ένα απομονομένο νησί στον Ειρινικό ωκεανό που λέγεται Niue κόβει νομίσματα που έχουν πάνω Pokemon, και μπορεί κανείς να τα ξοδέψει για αληθινά προϊόντα ή υπηρεσίες.",
        "Το μαυρό που στροβιλίζει στην κοιλιά του poliwag++ έχουν παρθεί στην πραγματικότητα από τα άντερα του γυρίνου, που φαίνονται μέσα απο το δέρμα του.",
        "Υπήρχε ένα επισόδειο pokemon το οποίο προβλήθηκε στην ιαπωνία και είχε να κάνει με το porygon, λεγόταν cyber-soldier porygon και προβλήθηκε μόνο μια φορά και μόνο στην ιαπωνία, λέγεται ότι λόγω πολύ έντονων φωτισμών και λάμψεων που γινόντουσαν σε αυτό το επισόδειο πολυ ευαίσθητα σε τέτοιου είδους θέματα παιδιά έπαθαν επιληψία.",
        "To nosepass οταν τον συναντάς στον χάρτη του Pokemon-go κοιτάει πάντα στον βορρά",
      ];
      var fact = Math.floor(Math.random() * facts.length);
      message.reply(facts[fact]);
     } 

    var fairy = 1;
    var steel = 1 ;
    var ice = 1;
    var poison = 1;
    var rock = 1;
    var water = 1;
    var flying = 1;
    var dragon = 1;
    var grass = 1;
    var fight = 1;
    var bug = 1;
    var fire = 1;
    var ground = 1;
    var ghost = 1;
    var electr = 1;
    var normal = 1;
    var psychc = 1;
    var dark = 1;
    var count = 0;

    function resetData(){
      fairy = 1;
      steel = 1 ;
      ice = 1;
      poison = 1;
      rock = 1;
      water = 1;
      flying = 1;
      dragon = 1;
      grass = 1;
      fight = 1;
      bug = 1;
      fire = 1;
      ground = 1;
      ghost = 1;
      electr = 1;
      normal = 1;
      psychc = 1;
      dark = 1;
      count = 0;
    }


  if (message.content.startsWith(prefix + "counter")){
    var words = message.content.split(' ');
    var type1 = words[1];
    var type2 = words[2];

    if (typeof words[1] === "undefined"){
      message.reply("Έγινε κάποιο λάθος. Πρόσεχε τα κενά.")
      return;
    }
    type1 = words[1].toLowerCase();

    if (type2){
      type2 = words[2].toLowerCase();
    }
  
    if (type1 === "pokemon"){
    pm.getPokemonByName(type2)
    .then(function(response) {
      response["types"].forEach(
        (t) => {
          calcuLator(t["type"]["name"]);
        }
      )
      outPut()
    })
    .catch(function(error) {
      message.reply("Μάλλον έγραψες λάθος το όνομα του pokemon, δοκίμασε ξανά.");
    });
  }
  else if (!type2 || type1 === type2){
    calcuLator (type1)
    if (count < 1){
      message.reply("Ο τύπος που έγραψες δεν είναι σωστός.");
    }
    else{
      outPut()
    }
  }
  else if (type2){ 
    calcuLator (type1)
    calcuLator (type2)
      if (count === 2){
      outPut()
      }
    else {
      message.reply("Κάποιος απο τους τύπους που έγραψες είναι λάθος");
    }
  } 
  function calcuLator (type){
    if (type.includes("fairy")){
      fairyType(poison,steel,fight,dark,dragon,bug);
      count = count + 1;
    }
    else if (type.includes("steel")){
      steelType(normal,fire,grass,ice,fight,poison,ground,flying,psychc,bug,rock,dragon,fairy);
      count = count + 1;
    }
    else if (type.includes("dark")){
      darkType(fight, bug, fairy, psychc,ghost,dark); 
      count = count + 1;
    }
    else if (type.includes("dragon")){
      dragonType(ice,dragon,fairy,fire,water,electr,grass); 
      count = count + 1;
    }
    else if (type.includes("ghost")){
      ghosType(normal,fight,poison,bug,ghost,dark); 
      count = count + 1;
    }
    else if (type.includes("rock")){
      rockType(normal,fire,water,grass,fight,poison,flying,steel);
      count = count + 1;
    }
    else if (type.includes("bug")){
      bugType(fire,grass,fight,ground,flying,rock); 
      count = count + 1;
    }
    else if (type.includes("psychc")){
      psychcType(fight,psychc,bug,ghost,dark); 
      count = count + 1;
    }
    else if (type.includes("flying")){
      flyingType(electr,grass,ice,fight,ground,bug,rock); 
      count = count + 1;
    }
    else if (type.includes("ground")){
      groundType(water,electr,grass,ice,poison,rock); 
      count = count + 1;
    }
    else if (type.includes("poison")){
      poisonType(grass,fight,poison,ground,psychc,bug,fairy); 
      count = count + 1;
    }
    else if (type.includes("fight")){
      fighType(flying,psychc,bug,rock,dark,fairy); 
      count = count + 1;
    }
    else if (type.includes("ice")){
      iceType(fire,ice,fight,rock,steel); 
      count = count + 1;
    }
    else if (type.includes("grass")){
      grassType(fire,water,electr,grass,ice,poison,ground,flying); 
      count = count + 1;
    }
    else if (type.includes("electr")){
      electrType(electr,ground,flying,steel);
      count = count + 1;
    }
    else if (type.includes("water")){
      waterType(fire,water,electr,grass,ice,steel); 
      count = count + 1;   
    }
    else if (type.includes("fire")){
      fireType(fire,water,grass,ice,ground,bug,rock,steel,fairy); 
      count = count + 1;
    }
    else if (type.includes("normal")){
      normalType(fight,ghost); 
      count = count + 1;
    }
return (fairy, steel, dark, dragon, ghost, rock, bug, psychc, flying, ground, poison, fight, ice, grass, electr, water, fire, normal);
  }
    function fairyType (type){
      poison = poison * 2;
      steel = steel * 2;
      fight = fight / 2;
      dark = dark / 2
      dragon = dragon * 0;
      bug = bug / 2;
      return (poison,steel,fight,dark,dragon,bug);
    }
    function steelType(type){
      normal = normal / 2 ;
      fire = fire * 2; 
      grass = grass / 2;
      ice = ice / 2;
      fight = fight * 2;
      poison = poison * 0; 
      ground = ground * 2;
      flying = flying / 2;
      psychc = psychc / 2;
      bug = bug / 2;
      rock = rock / 2;
      dragon = dragon / 2;
      steel = steel / 2;
      fairy = fairy / 2;
      return (normal, fire, grass, ice, fight, poison, ground, flying, psychc,bug,rock,dragon,steel,fairy);
    }
    function darkType(type){
      fight = fight * 2;
      bug = bug * 2;
      fairy = fairy * 2;
      psychc = psychc * 0
      ghost = ghost / 2;
      dark = dark / 2;
      return (fight, bug, fairy, psychc, ghost,dark);
    }
    function dragonType (type){
      ice = ice * 2;
      dragon = dragon * 2;
      fairy = fairy * 2;
      fire = fire / 2;
      water = water / 2;
      electr = electr / 2;
      grass = grass / 2;
      return (ice, dragon, fairy, fire, water, electr, grass);
    }
    function ghosType (type){
      normal = normal * 0;
      fight = fight * 0;
      poison = poison / 2;
      bug = bug / 2;
      ghost = ghost * 2;
      dark = dark * 2;
      return (normal, fight, poison, bug, ghost, dark);
    }
    function rockType (type){
      normal = normal / 2;
      fire = fire / 2;
      water = water * 2;
      grass = grass * 2;
      fight = fight * 2;
      poison = poison / 2;
      ground = ground * 2; 
      flying = flying / 2;
      steel = steel * 2;
      return (normal, fire, water, grass, fight, poison, ground, flying, steel);
    }
    function bugType(type){
      fire = fire * 2;
      grass = grass / 2;
      fight = fight / 2;
      ground = ground / 2;
      flying = flying * 2;
      rock = rock * 2;
      return (fire, grass, fight, ground, flying, rock);
    }
    function psychcType (type){
      fight = fight / 2;
      psychc = psychc / 2;
      bug = bug * 2;
      ghost = ghost / 2;
      dark = dark * 2;
      return (fight, psychc, bug, ghost, dark);
    }
    function flyingType (type){
      electr = electr * 2;
      grass = grass / 2;
      ice = ice * 2;
      fight = fight / 2;
      ground = ground * 0;
      bug = bug / 2;
      rock = rock * 2;
      return (electr, grass, ice, fight, ground, bug, rock);
    }
    function groundType (type){
      water = water * 2;
      electr = electr * 0;
      grass = grass * 2;
      ice = ice * 2;
      poison = poison / 2;
      rock = rock / 2;
      return (water, electr, grass, ice, poison, rock);
    }
    function poisonType (type){
      grass = grass / 2;
      fight = fight / 2;
      poison = poison / 2;
      ground = ground * 2;
      psychc = psychc * 2;
      bug = bug / 2;
      fairy = fairy / 2;
      return (grass, fight, poison, ground, psychc, bug, fairy);
    }
    function fighType (type){
      flying = flying * 2;
      psychc = psychc * 2;
      bug = bug / 2;
      rock = rock / 2;
      dark = dark / 2;
      fairy = fairy * 2;
      return (flying, psychc, bug, rock, dark, fairy);
    }
    function iceType (type){
      fire = fire * 2;
      ice = ice / 2;
      fight = fight * 2;
      rock = rock *2;
      steel = steel *2;
      return (fire, water, grass, ice, ground, bug, rock, steel, fairy);
    }
    function grassType (type){
      fire = fire * 2;
      water = water / 2;
      electr = electr / 2;
      grass = grass / 2; 
      ice = ice * 2; 
      poison = poison * 2; 
      ground = ground / 2;
      flying = flying * 2;
      bug = bug * 2;
      return (fire, water, electr, grass, ice, poison, ground, flying)
    }
    function electrType (type){
      electr = electr / 2;
      ground = ground * 2;
      flying = flying / 2;
      steel = steel / 2;
      return (electr, ground, flying, steel);
    }
    function waterType (type){
      fire = fire / 2;
      water = water / 2; 
      electr = electr * 2;
      grass = grass * 2;
      ice = ice / 2 ;
      steel = steel / 2;
      return (fire, water, electr, grass, ice, steel);
    }
    function fireType (type){
      fire = fire / 2
      water = water * 2
      grass = grass / 2
      ice = ice / 2
      ground = ground * 2 
      bug = bug / 2
      rock = rock * 2 
      steel = steel / 2
      fairy = fairy / 2
      return (fire, water, grass, ice, ground, bug, rock, steel, fairy);
    }
    function normalType (type){
      fight = fight * 2;
      ghost = ghost * 0;
      return (fight, ghost);
    }
    function outPut (Mesa){
      var preFab = `\n<:normal:624712757496905729>: x${normal}\n<:fire:624712757329264650>: x${fire} \n<:water:624712756834336788>: x${water}\n<:electr:624712757974925313>: x${electr} \n<:grass:624712758973169685>: x${grass} \n<:ice:624712757006172174>: x${ice} \n<:fight:624712757928919061>: x${fight} \n<:poison:624712758885220382>: x${poison} \n<:ground:624712758314926084>: x${ground} \n<:flying:624712757391917058>: x${flying} \n<:psychc:624712758520446992>: x${psychc} \n<:bug:624712756582547456>: x${bug} \n<:rock:624712758847602698>: x${rock} \n<:ghost:624712756699856907>: x${ghost} \n<:dragon:624712756821622786>: x${dragon} \n<:dark:624688707135471624>: x${dark} \n<:steel:624712757555625985>: x${steel} \n<:fairy:624712758641950721>: x${fairy}`;
      var pfArray = preFab.split('\n');
      var output = [];
      pfArray.forEach(
        (line) => {
          line = line.trim();
          pfArray[pfArray.indexOf(line)] = line;
          // Possibly still useful code!
          if(line.endsWith("x1")){
            //if (pfArray.indexOf(line) > -1) {
            //  pfArray.splice(pfArray.indexOf(line), 1);
            //}
            //pfArray.splice(pfArray.indexOf(line), 1);
            //console.log(line);
          } else {
            output.push(line);
          }
          
        })
      message.reply(output);
    }
  }
  if (message.content.startsWith(prefix + "sprite")){
    var words = message.content.split(' ');
    var type1 = words[1];
    type1 = words[1].toLowerCase();
    pm.getPokemonByName(type1)
    .then(function(response) {
          message.reply(`Ενα ${words[1]} μοιάζει κάπως έτσι:` ,{file: response["sprites"]["front_default"]} )
          message.channel.send({file: response["sprites"]["front_shiny"]});
        }
      )
    .catch(function(error) {
      message.reply("Μάλλον έγραψες λάθος το όνομα του pokemon, δοκίμασε ξανά.");
    });
  }

  function screenShot (Screenshot){
    message.author.createDM().then(dmc => {
      message.author.send(`Γειά σου! καλοσήρθες στον σέρβερ του pokemon-go ρεθύμνου, είσαι σχεδόν έτοιμος να πάρεις μέρος στην κοινότητα. ένα επιπλέον και προαιρετικό βήμα είναι να μου στείλεις εδω (DM) ενα screenshot από το προφιλ σου στο pokemon-go.`)
      const collector = new Discord.MessageCollector(
        dmc,
        m => m.author.id === message.author.id,
        {}
      );
      collector.on('collect', message => {
        if (message.attachments.size > 0) {
            message.channel.send('Το screenshot στάλθηκε με επιτυχία, ευχαριστούμε. Για οποιαδήποτε απορία που έχεις, μπορείς να απευθυνθείς στο κανάλι "Questions" η στους admins του σερβερ.')
            console.log(`Collected ${message.attachments.size} screenshots`);
            client.channels
                .get(screenshotchannel)
                .send({files:[message.attachments.first().url]});
        } else if (message.attachments.size < 0) {
            message.channel.send("Υπήρχε πρόβλημα με το screenshot που έστειλες, αν βλέπεις αυτό το μήνυμα παρακαλώ να ενημερώσεις κάποιον απο τους admin του σέρβερ γιατί ίσως είναι bug του bot.");
        }
      });
    });
    return;
  }
  if(message.content.startsWith(prefix + "helprof")){
		let ourtext = "Ορίστε μια λίστα με τα commands τα οποία λειτουργώ: \n;counter [type] [type] : Δείνω σε τι τύπους έχει αδυναμίες ο / οι τύποι που θα γράψεις.(παράδειγμα: ;counter dragon flying)\n;counter pokemon [Pokemon's name] : Δείνω σε τι επιθέσεις έχει αδυναμία ένα οποιοδήποτε pokemon.(το meltan δεν είναι στην βάση δεδομένων ακόμα)\n;shiny [Pokemon's name] : Δείχνει πως μοιάζει ένα pokemon όταν είναι shiny. (παράδειγμα: !shiny bulbasaur)\n;pokefacts : Δίνει μια τυχαία (και μάλλον άχρηστη) πληροφορία για τον κόσμο των Pokemon.\nlevelup [αριθμός] : Ανεβάζει η κατεβάζει το επίπεδο του χρήστη με τον αριθμό που αυτός έγραψε, λειτουργεί μόνο στο levelup κανάλι και μπορεί να χρησιμοποιηθεί μια φορά την μέρα. (παρ: levelup 38) ";
		message.author.send(ourtext)
		.catch(console.error);	
  }

/*   if (message.member.roles.has(adminid) || message.member.roles.has(modid)){
  if(message.content.startsWith(prefix + "exdate")){
    var words = message.content.split(' ');
    var year = words[1];
    var month = words[2];
    var day = words[3];
    var hour = words[4];
    var min = words[5];
    var sec = words[6];
    var date = new Date(year, month, day, hour, min, sec);
    console.log(year,month,day,hour,min,sec);
    message.reply(`το ex-raid ρυθμίστηκε για ${day}/${month}/${year} , ωρα: ${hour}:${min}`)
    WriteToFile(year, month , day , hour, min, sec);

    var j = schedule.scheduleJob(date, function() {
      client.channels.get(exraidchannel).send('ο χρονος σου τελειωσε gpago, ετοιμασου.');
      j.cancel();
    });
  }
 
 

  function WriteToFile(passForm) {
      fs.writeFile('date.txt',[year, month, day, hour, min, sec], (err) => {
        if (err) throw err;
        console.log('Date saved');
    });
   }
} */

})
